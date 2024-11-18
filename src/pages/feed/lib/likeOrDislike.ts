import { putLikeOrDislike } from "../api/putLikeOrDislike";

export async function likeOrDislike(like: boolean, card: HTMLElement) {
    let userId = card.getAttribute('data-item-id');
    await putLikeOrDislike(like, parseInt(userId));
}