const proffys = [

{
	name: "Brenda Martins",
	avatar: "https://avatars2.githubusercontent.com/u/64932290?s=460&u=43adc2cab189ddff2d001b8d0923acd02b0695f1&v=4",
	whatsapp: "(31)9 -8780 - 5505",
	bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
	subject: "Química",
	cost: "40",
	weekday: [0],
	time_from:[720],
	time_to:[1220]
},

{
	name: "Brenda Fernandes",
	avatar: "https://avatars2.githubusercontent.com/u/64932290?s=460&u=43adc2cab189ddff2d001b8d0923acd02b0695f1&v=4",
	whatsapp: "(31)9 -8808 - 8211",
	bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
	subject: "Física",
	cost: "100",
	weekday: [0],
	time_from:[720],
	time_to:[1220]
}
];

const subjects =[
"Artes",
"Biologia",
"Ciências",
"Educação física",
"Física",
"Geografia",
"História",
"Matemática",
"Português",
"Química",
];

const weekdays = [
"Domingo",
"Segunda-feira",
"Terça-feira",
"Quarta-feira",
"Quinta-feira",
"Sexta-feira",
"Sábado",
];


function getSubject(subjectNumber){
	const arrayPosition = +subjectNumber -1;
	return subjects[arrayPosition];
}


function pageLanding(req, res){
	res.render("index.html")
}

function pageStudy(req, res){
	const filters = req.query;
	res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res){
	const data = req.query;
	const isNotEmpty = Object.keys(data).length > 0;

	if(isNotEmpty){

		data.subject = getSubject(data.subject);
		proffys.push(data);

		return res.redirect('/study')
	}
	
	res.render("give-classes.html", { subjects, weekdays });
}

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
	express: server,
	noCache: true,
});

server.use(express.static('public'))

.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)

.listen(55000);