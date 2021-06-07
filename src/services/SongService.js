import http from "../http-common";

class SongService {
    getAll() {
        return http.get("/songs/");
    }
    get(id) {
        return http.get(`/songs/${id}`);
    }

    create(data) {
        return http.post("/songs/", data);
    }

    update(id, data) {
        return http.put(`/songs/${id}`, data);
    }

    delete(id) {
        return http.delete(`/songs/${id}`);
    }

    deleteAll() {
        return http.delete(`/songs/`);
    }
    findByTitle(title){
        return http.get(`/songs/title/${title}`)
    }
    findByArtistName(name){
        return http.get(`/songs/artist/name/${name}`)
    }
    findByArtistId(id){
        return http.get(`/songs/artist/id/${id}`)
    }
}

export default new SongService();
