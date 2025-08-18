class ObjectUtils {
  static toURIParams(obj) {
    let str = "";
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const val = obj[key];
        if (str !== "") {
          str += "&";
        }
        str += `${key}=${encodeURIComponent(val)}`;
      }
    }
    return str;
  }
}

export default ObjectUtils;
