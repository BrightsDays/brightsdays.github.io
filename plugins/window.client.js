export default ({store}) => {
    window.addEventListener('load', () => {
        store.commit('adaptive/changeType', window.innerWidth);
    });
    window.addEventListener('resize', () => {
        store.commit('adaptive/changeType', window.innerWidth);
    });
};
