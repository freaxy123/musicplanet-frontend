import http from "../http-common";

class PlaylistService {
    getAll() {
        return http.get("/playlists/");
    }
    get(id) {
        return http.get(`/playlists/${id}`);
    }

    create(data) {
        return http.post("/playlists/", data);
    }

    update(id, data) {
        return http.put(`/playlists/${id}`, data);
    }

    delete(id) {
        return http.delete(`/playlists/${id}`);
    }

    deleteAll() {
        return http.delete(`/playlists/`);
    }
    findByName(name){
        return http.get(`/playlists/name/${name}`)
    }
}

export default new PlaylistService();
