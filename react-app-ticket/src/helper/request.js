
export default async (path,opt)=>{
    const basic = "https://www.easy-mock.com/mock/5b3734c5808a747e8d04a26a/movie" + path;
    const option = Object.assign({
        method:"GET"
    },opt)
    const result = await fetch(basic,option).then(res=>res.json());
    return result.data;
}