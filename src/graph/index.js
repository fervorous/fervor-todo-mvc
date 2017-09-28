// Just an example. This adds a "random" field to every object
// You could be more selective also! By detecting which "field"
// you could append "random" to specific fields.
function MyRandomFieldPlugin(
  builder,
  { myDefaultMin = 1, myDefaultMax = 100 },
) {
  builder.hook('GraphQLObjectType:fields', (
    fields, // input object
    { extend, graphql: { GraphQLInt } }, // Build
    context, // eslint-disable-line
  ) => (
    extend(fields, {
      random: {
        type: GraphQLInt,
        args: {
          sides: {
            type: GraphQLInt,
          },
        },
        resolve(_, { sides = myDefaultMax }) {
          return (
            Math.floor(Math.random() * (sides - (myDefaultMin + 1))) + myDefaultMin
          );
        },
      },
    })
  ));
}

// Here's an example where we get specific, and we make an external request
function NotSoRandom(
  builder,
  { myDefaultMin = 1, myDefaultMax = 100 },
) {
  builder.hook('GraphQLObjectType:fields', (
    fields, // input object
    { extend, graphql: { GraphQLInt } }, // Build
    { GraphQLObjectType },
  ) => {
    if (GraphQLObjectType.name === 'Goal') {
      return extend(fields, {
        notSoRandom: {
          type: GraphQLInt,
          async resolve() {
            return await fetch('https://jsonplaceholder.typicode.com/posts/5')
              .then((response) => response.json())
              .then((data) => data.id)
          },
        },
      });
    }

    return fields;
  })
};

// and here's an example where we add a custom query
function CustomQuery(builder) {
  builder.hook('GraphQLObjectType:fields',
  (
    fields,
    { extend, getTypeByName, newWithHooks, graphql },
    { scope: { isRootQuery } }
  ) => {
    if (!isRootQuery) {
      return fields;
    }

    const HelloPayload = newWithHooks(
      graphql.GraphQLObjectType,
      {
        name: 'HelloPayload',
        fields: () => ({
          welcome: {
            type: graphql.GraphQLString,
            description: 'A grand gesture'
          },
          name: {
            type: graphql.GraphQLString,
            description: 'Name of person to welcome'
          },
        }),
      },
      {}
    );

    return extend(fields, {
      introduceFolks: {
        type: HelloPayload,
        args: {
          human: {
            type: graphql.GraphQLString,
          },
        },
        resolve(_, { human = 'world'}) {
          return {
            welcome: 'hello',
            name: human,
          };
        },
      }
    });
  })
}

export default () => ({
  graphiql: true,
  appendPlugins: [MyRandomFieldPlugin, NotSoRandom, CustomQuery],
});
