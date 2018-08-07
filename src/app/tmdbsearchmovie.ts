import { TmdbMovie } from "./tmdbmovie";

export class TmdbSearchMovie {
    page: number;
    total_results: number;
    total_pages: number;
    results: TmdbMovie[];
}