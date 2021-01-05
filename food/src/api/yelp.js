import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer HZizOk0w2kn_5IfbSuiTqixLKDkXK8YHyboqXdqSipxc0ylfBworgLTqhd3SV41afiTaKNer_ze1THT2tXd811IrAuVT7vub92pgb3ggWZOGKibO_Yw73QFpvH7nX3Yx",
  },
});
