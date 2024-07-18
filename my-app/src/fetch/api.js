// # write methods that would consume API's with axios library
import axios from "axios";

// url must end with forward / to avoid 404 errors
const url = "http://127.0.0.1:8000/api/recipes/";

// GET request
const getData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

// POST request
const postData = async (data) => {
  try {
    console.log(url, data);
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to post data");
  }
};

// PUT request
const updateData = async (data, id) => {
  try {
    const response = await axios.put(url + id, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update data");
  }
};

// DELETE request
const deleteData = async (id) => {
  try {
    const response = await axios.delete(url + id);
    console.log(response);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete data");
  }
};

export { getData, postData, updateData, deleteData };
