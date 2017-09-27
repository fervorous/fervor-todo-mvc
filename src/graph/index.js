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

// TODO: and here's an example where we add a custom query
// function CustomQuery(builder) {
//   builder.hook('GraphQLObjectType', (
//     spec,
//     { extend, graphql: { GraphQLString } },
//     { scope: { isRootQuery } }
//   ) => {
//     if (!isRootQuery) {
//       return spec;
//     }
//     return extend(spec, {
//       makeAPizza: {
//         type: GraphQLString,
//         resolve() {
//           return JSON.stringify({
//             hello: 'world',
//             abc: '123',
//           });
//         },
//       }
//     });
//   })
// }

export default () => ({
  graphiql: true,
  appendPlugins: [MyRandomFieldPlugin, NotSoRandom],
});
