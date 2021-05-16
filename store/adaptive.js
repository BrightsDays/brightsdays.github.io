export const state = () => ({
    deviceType: 'desktop',
});

export const mutations = {
    changeType(state, value) {
        state.deviceType = window.innerWidth > 700 ?
            'desktop' :
            'tablet'
    }
};
