let clockTime = 0,
    maxFrameTime = 33,
    maxFrameTimeEnabled = false;


const clock = {

  pause() {
  },

  getTime() {
    return clockTime;
  },

  // when `maxFrameTimeEnabled` is enabled, prevent the time from
  // incrementing more than `maxFrameTime` between frames. This will
  // prevent animations from being skipped entirely
  setMaxFrameTime(time) {
    maxFrameTime = time;
  },

  enableMaxFrameLimit(enable) {
    maxFrameTimeEnabled = enabled;
  }

};

export default clock;
