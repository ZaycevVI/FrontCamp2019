import { ApiNewsService } from "../service/apiNewsService";

export class ApiNewsFactory {
    static apiNews() {
        return new ApiNewsService(environment.apiNewsUrl, environment.apiKey);
    }
}