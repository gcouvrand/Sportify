import MainData from '../models/MainData'
import Activity from '../models/Activity'
import AverageSession from '../models/AverageSession'
import Performance from '../models/Performance'


/**
 *  Method to fetch the datas from the API
 * 
 * @params {data} datas from the API
 * @params {id} id of the current user
 * @returns a method to fetch the datas from the API
 */

const GetData = async (data, id) => {
    const getRequest = await fetch(data)
    const jsonResponse = await getRequest.json()
    // We take the last part of the URL
    const url = data.split("/").pop()
 
    switch (url) {
        // If the URL contains an ID we generate a new MainData object
        case `${id}`:
            return new MainData(   
                jsonResponse.data.id, 
                jsonResponse.data.keyData, 
                jsonResponse.data.todayScore || jsonResponse.data.score, 
                jsonResponse.data.userInfos
            )
        // If the URL contains the activity word we generate a new Activity object
        case "activity":
            return new Activity(
                jsonResponse.data.userId,
                jsonResponse.data.sessions,
            )
        // If the URL contains the average-sessions word we generate a new AverageSession object
        case "average-sessions":
            return new AverageSession(
                jsonResponse.data.userId,
                jsonResponse.data.sessions,
            )
        // If the URL contains the performance word we generate a new Performance object
        case "performance":
            return new Performance(
                jsonResponse.data.userId,
                jsonResponse.data.kind,
                jsonResponse.data.data
 
            )
        default:
            break;
    }
}
export default GetData