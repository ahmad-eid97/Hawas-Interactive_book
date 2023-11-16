export default function useLogic() {
  let interval: any;
  const startHoverHandler = () => {
    let timer = 0;
    interval = setInterval(() => {
      timer += 1
    }, 1000)
  }

  const endHoverHandler = async () => {
    clearInterval(interval)
  }
  return {
    startHoverHandler,
    endHoverHandler
  }
}