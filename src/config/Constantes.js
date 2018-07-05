import axios from "axios";

//__API__ definida pelo
const baseUrl = __API__;
const isProducao = __PRODUCAO__;

const http = axios.create({
    baseURL: baseUrl
});

export {isProducao, http, baseUrl};
