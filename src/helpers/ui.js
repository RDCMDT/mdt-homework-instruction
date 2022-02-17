const UI = {
    getWindowDimensions: () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
};
export default UI;