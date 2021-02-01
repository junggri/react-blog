export default function isNew(date: string) {
   const date_diff = ((new Date() as any) - (new Date(date) as any)) / (24 * 3600 * 1000);
   return Math.floor(date_diff) <= 1;
}