const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const baseURL = "http://localhost:4000"
const getCompliment = () => {
    axios.get(baseURL + "/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
    
};

const getFortune = () => {
    axios.get(baseURL + "/api/fortune/")
        .then((res) => {
            alert(res.data)
        }).catch((error) => {
            console.log(error)
        })
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)