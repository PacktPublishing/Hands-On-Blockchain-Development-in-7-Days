export function getString(asset, callback) {
  if(asset) {
    const reader = new FileReader();
    reader.readAsDataURL(asset)

    reader.onload = () => {
      callback(reader.result)
    }
  }
}
