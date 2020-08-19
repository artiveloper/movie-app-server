import {GraphQLServer} from 'graphql-yoga'
import merge from 'lodash/merge'
import * as resolvers from './resolvers'

const server = new GraphQLServer({
    typeDefs: "src/graphql/schema.graphql",
    resolvers: Object.values(resolvers).reduce((c, v) => merge(c, v), {})
})

server.start(() => console.log("graphql server running on 4000 port!"))
