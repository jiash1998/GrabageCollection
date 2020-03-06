//函数防抖，n秒内只执行一次

export function debounce(fun, times, flag) {
  let timeout;
  return function(event) {
    // console.log(event);

    const context = this;

    if (timeout) clearTimeout(timeout);

    if (flag) {
      let callNow = !timeout;

      timeout = setTimeout(() => {
        timeout = null;
      }, times);
      if (callNow) fun.call(context, event);
    } else {
      timeout = setTimeout(() => {
        fun.apply(context, event);
      }, times);
    }
  };
}
