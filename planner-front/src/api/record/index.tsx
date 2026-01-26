import axios from "axios";
import { RecordResponse } from "./model";
import { API_URL } from "../../constants";

export const getRecords = async () : Promise<RecordResponse> => {
    const response = await axios.get(`${API_URL}/record`);
    return response.data;
}