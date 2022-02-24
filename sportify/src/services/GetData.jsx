import MainData from '../models/MainData'
import Activity from '../models/Activity'
import AverageSession from '../models/AverageSession'
import Performance from '../models/Performance'

const GetData = async (data, id) => {
    const getRequest = await fetch(data)
    const jsonResponse = await getRequest.json()
    const url = data.split("/").pop()
 
    switch (url) {
        case `${id}`:

            return new MainData(   
                jsonResponse.data.todayScore || jsonResponse.data.score, 
                jsonResponse.data.userInfos,
                jsonResponse.data.id, 
                jsonResponse.data.keyData
            )
        case "activity":
            return new Activity(
                jsonResponse.data.userId,
                jsonResponse.data.sessions
            )
        case "average-sessions":
            return new AverageSession(
                jsonResponse.data.userId,
                jsonResponse.data.sessions
            )
        case "performance":
            return new Performance(
                jsonResponse.data.data,
                jsonResponse.data.userId,
                jsonResponse.data.kind
 
            )
        default:
            break;
    }
}
export default GetData