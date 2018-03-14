const mainColor = '#1890FF';
const minorColor = '#E6F7FF';

const playBarHeight = '116px';
const leftMenuWidth = '256px';

const barSize = '::-webkit-scrollbar {width: 8px; height: 8px;}';
const barTrack = '::-webkit-scrollbar-track {background-color: rgba(0, 0, 0, 0.05);}';
const barThumb = '::-webkit-scrollbar-thumb {border-radius: 50px;background-color: rgba(0, 0, 0, 0.15);}';
const scrollBar = `${barSize + barTrack + barThumb}`;

export {
    mainColor,
    minorColor,
    playBarHeight,
    leftMenuWidth,
    scrollBar
};
