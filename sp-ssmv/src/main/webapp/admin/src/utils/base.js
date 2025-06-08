const base = {
    get() {
                return {
            url : "http://localhost:8080/sp-ssmv/",
            name: "sp-ssmv",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/sp-ssmv/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "在线购物系统"
        } 
    }
}
export default base
