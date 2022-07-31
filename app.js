window.onload = () => {
	let button = document.querySelector("#btn");


	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {


	let height = parseInt(document
			.querySelector("#height").value);


	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");


	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";


	else {


		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);


		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span>
			<br>
			"Your BMI falls in underweight.
            Although being lean can often be healthy, being underweight can be a concern if it's the result of poor nutrition or if you are pregnant or have other health concerns.

			<h2 style="color:#607EAA"  >Health Tips:</h2>
			<br>


1.Eat more frequently:  When you're underweight, you may feel full faster. Eat five to six smaller meals during the day rather than two or three large meals.
<br>
2.Choose nutrient-rich foods:As part of an overall healthy diet, choose whole-grain breads, pastas and cereals; fruits and vegetables; dairy products; lean protein sources; and nuts and seeds.
<br>
3.Try smoothies and shakes: Don't fill up on diet soda, coffee and other drinks with few calories and little nutritional value. Instead, drink smoothies or healthy shakes made with milk and fresh or frozen fruit.
<br>
4. Top it off: Add extras to your dishes for more calories — such as cheese in casseroles and scrambled eggs, and fat-free dried milk in soups and stews.
<br>
5. Visit a nearby doctor : Discuss with a doctor what all you can include in your diet and lifestyle to gain weight in a healthy way.
<br>
6.Exercise. Exercise, especially strength training, can help you gain weight by building up your muscles. Exercise may also stimulate your appetite.
<br>
<h3 style="color:#607EAA">Diet Tips:</h3>
<br>

1.Eating at least 5 portions of a variety of fruit and vegetables every day.
<br>
2.Basing meals on potatoes, bread, rice, pasta or other starchy carbohydrates. Choose wholegrain where possible.
<br>
3.Having some dairy or dairy alternatives (such as soya drinks and yoghurts). Have whole (full-fat) milk until you build your weight back up.Also try to include meat or food like that for calorie intake.
<br>
<h3 style="color:#607EAA">Risk of diseases :</h3>
<br>
Malnutrition, vitamin deficiencies, or anemia,
osteoporosis from too little vitamin D and calcium,
decreased immune function,
increased risk for complications from surgery, fertility issues caused by irregular menstrual cycles, growth and development issues, especially in children and teenagers"`;


		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal : <span>${bmi}</span>
				<br>
				"Great!! Your BMI falls in healthy weight

Achieving and maintaining a healthy weight includes healthy eating, physical activity,optimal sleep and stress reduction

<h2 style="color:#607EAA"  >Health Tips:</h2>
<br>

 1.Excercise daily : Your body weight is affected by the amount of energy you take in and the amount you use. If you want to maintain your current body weight, you will need to use as much energy as you consume
<br>
2. Get more sleep

Getting a good amount of sleep every night helps to reset your body, preparing it for the next day.
<br>
3. Track what you eat
Many people are unaware of exactly how many calories they consume, which is why it’s important to track and monitor the total calories you eat and drink each day.
<br>
4. Drink more water: Drinking water, along with eating good foods and exercising daily, can help you to maintain a healthy weight.
<br>
<h3 style="color:#607EAA">Diet Tips:</h3>
<br>

1. Continue to eat and maintain your current diet and lifestyle.
<br>

2. Continue to include fruits and green vegetables in your diet on daily basis.
<br>

3. Maintain balance between  what you eat and work .
<br>

<h3 style="color:#607EAA">Risk of diseases :</h3>
<br>
A healthy body is at least risk of diseases. However if you feel unhealthy don't miss to have an appointment with your nearby doctor."`;


		else result.innerHTML =
			`Over Weight : <span>${bmi}</span>

			<br>
			"Your BMI falls in over-weight (obesity) .
			<br>

<h2 style="color:#607EAA"  >Health Tips:</h2>
<br>
1. Eat slowly and mindfully: Avoid junk food as it lacks in nutrition. Slower  down at meals and choose smaller portions that can help avoid overeating by giving the brain time to tell the stomach when it’s had enough food. 
<br>
2. Physical exercise recommended: Besides eating a healthy diet, nothing is more important to keeping weight in check and staying healthy than regular activity. If there ever were a magic bullet for good health, physical activity would be it.
<br>
3.Limit Screen Time

Watching Television(TV) can be enjoyable and informative; unfortunately it can also be double jeopardy when it comes to weight.
<br>
4. Relax
Today’s world is full of daily stresses. This is a normal part of life, but when these stresses become too much, they can take a toll on health and contribute to weight gain .
<br>
5.Get Enough Sleep
There is more and more evidence that a good night’s sleep is important to good health-and may also help keep weight in check.
<br>
<h3 style="color:#607EAA">Diet Tips:</h3>
<br>
Choose minimally processed, whole foods:
<br>

1.Whole grains (whole wheat, steel cut oats, brown rice, quinoa)
<br>

2.Vegetables (a colorful variety-not potatoes),
whole fruits (not fruit juices)
<br>

3.Nuts, seeds, beans, and other healthful sources of protein (fish and poultry)
<br>

4.Limit these foods and drinks:

Sugar-sweetened beverages (soda, fruit drinks, sports drinks)
Fruit juice (no more than a small amount per day), Other highly processed foods, such as fast food or red meat.
<br>
<h3 style="color:#607EAA">Risk of diseases :</h3>
People with obesity are more likely to develop a number of potentially serious health problems, including: Heart disease and strokes, type 2 diabetes, certain cancers, digestive problems, sleep apnea, osteoarthritis, severe covid-19 symptoms."`;

	}
}