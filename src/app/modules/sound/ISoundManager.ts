export default interface ISoundManager {
    preloadSound(sid: symbol): Promise<any>;
    playSound(sid: symbol): Promise<any>;
}