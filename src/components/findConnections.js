import { peopleData } from "./peopleData";

export default function findConnections(friend1, friend2) {
    let result = [];

    function innerConnections(
        friend1,
        friend2,
        path = [friend1],
        visited = {}
    ) {
        if (visited[friend1]) return;

        visited[friend1] = true;

        if (peopleData.entityRelations[friend1] instanceof Array) {
            for (let friend of peopleData.entityRelations[friend1]) {
                if (friend === friend2) {
                    result.push(path.concat(friend2));
                } else {
                    innerConnections(
                        friend,
                        friend2,
                        path.concat(friend),
                        visited
                    );
                }
            }
        }
    }
    innerConnections(friend1, friend2);
    return result;
}
