export function formatToTimeAgo(date: string): string {
  const dayInms = 1000 * 60 * 60 * 24;
  const hourInms = 1000 * 60 * 60;
  const MinInms = 1000 * 60;
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const diff = time - now;
  const formatter = new Intl.RelativeTimeFormat("ko");
  let trans;

  //todo 이게 맞나
  if (Math.abs(diff / MinInms) < 1) {
    return "방금전";
  } else if (Math.abs(diff / hourInms) < 1) {
    trans = Math.round(diff / MinInms);
    return formatter.format(trans, "minutes");
  } else if (Math.abs(diff / dayInms) < 1) {
    trans = Math.round(diff / hourInms);
    return formatter.format(trans, "hours");
  } else {
    trans = Math.round(diff / dayInms);
    return formatter.format(trans, "days");
  }

  // if (Math.abs(diff / dayInms) > 1) {
  //   trans = Math.round(diff / dayInms);
  //   return formatter.format(trans, "days");
  // } else {
  //   if (Math.abs(diff / hourInms) < 1) {
  //     if (Math.abs(diff / MinInms) < 1) {
  //       return "방금전";
  //     } else {
  //       trans = Math.round(diff / MinInms);
  //       return formatter.format(trans, "minutes");
  //     }
  //   }
  //   trans = Math.round(diff / hourInms);
  //   return formatter.format(trans, "hours");
  // }
}

export function formatToWon(price: number): string {
  return price.toLocaleString("ko-KR");
}

export function convertToNumber(won: string): number {
  return Number(won.split(",").join(""));
}

export function dateFormatter(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${year}년 ${month}월 ${day}일`;
  return formattedDate;
}
