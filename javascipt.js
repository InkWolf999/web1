const titels=[['arts','food','forset'],['فن','طعام','غابة']]
const text=[[
    'The arts are a very wide range of human practices of creative expression, storytelling and cultural participation. They encompass multiple diverse and plural modes of thinking, doing and being, in an extremely broad range of media. Both highly dynamic and a characteristically constant feature of human life, they have developed into innovative, stylized and sometimes intricate forms. This is often achieved through sustained and deliberate study, training and/or theorizing within a particular tradition, across generations and even between civilizations. The arts are a vehicle through which human beings cultivate distinct social, cultural and individual identities, while transmitting values, impressions, judgments, ideas, visions, spiritual meanings, patterns of life and experiences across time and space.',
    "Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical context",
    'forest is an area of land dominated by trees. Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing, and ecological function. The United Nations'+' Food and Agriculture Organization (FAO) defines a forest as, "Land spanning more than 0.5 hectares with trees higher than 5 meters and a canopy cover of more than 10 percent, or trees able to reach these thresholds in situ. It does not include land that is predominantly under agricultural or urban use. Using this definition, Global Forest Resources Assessment 2020 (FRA 2020) found that forests covered 4.06 billion hectares (10.0 billion acres; 40.6 million square kilometres; 15.7 million square miles), or approximately 31 percent of the world'+'s land area in 2020.'
],['الفنون هي مجموعة واسعة جدًا من الممارسات البشرية للتعبير الإبداعي ورواية القصص والمشاركة الثقافية. وهي تشمل أنماطًا متعددة ومتنوعة ومتعددة من التفكير والفعل والوجود ، في نطاق واسع للغاية من الوسائط. كلاهما ديناميكي للغاية وميزة ثابتة مميزة للحياة البشرية ، فقد تطورت إلى أشكال مبتكرة ومنمقة وأحيانًا معقدة. يتم تحقيق ذلك غالبًا من خلال الدراسة المستمرة والمتعمدة ، والتدريب و / أو التنظير ضمن تقليد معين ، عبر الأجيال وحتى بين الحضارات. الفنون هي وسيلة ينمي من خلالها البشر هويات اجتماعية وثقافية وفردية متميزة ، بينما ينقلون القيم والانطباعات والأحكام والأفكار والرؤى والمعاني الروحية وأنماط الحياة والتجارب عبر الزمان والمكان.',
"الغذاء هو أي مادة يستهلكها كائن حي للدعم الغذائي. وعادة ما يكون الغذاء من أصل نباتي أو حيواني أو فطري ، ويحتوي على العناصر الغذائية الأساسية ، مثل الكربوهيدرات ، والدهون ، والبروتينات ، والفيتامينات ، أو المعادن. واستيعابها من قبل خلايا الكائن الحي لتوفير الطاقة أو الحفاظ على الحياة أو تحفيز النمو. أنواع مختلفة من الحيوانات لها سلوكيات تغذية مختلفة تلبي احتياجات عمليات الأيض الفريدة الخاصة بها ، والتي غالبًا ما تتطور لملء مكانة إيكولوجية معينة ضمن سياق جغرافي محدد ",
'الغابة هي مساحة من الأرض تهيمن عليها الأشجار. تُستخدم مئات التعريفات للغابات في جميع أنحاء العالم ، وتتضمن عوامل مثل كثافة الأشجار ، وارتفاع الشجرة ، واستخدام الأراضي ، والوضع القانوني ، والوظيفة البيئية. تُعرِّف منظمة الأمم المتحدة للأغذية والزراعة (الفاو) الغابة بأنها "أرض تمتد على أكثر من 0.5 هكتار بها أشجار يزيد ارتفاعها عن 5 أمتار وغطاء مظلة يزيد عن 10 في المائة ، أو أشجار قادرة على الوصول إلى هذه العتبات في الموقع. لا تشمل الأراضي الخاضعة في الغالب للاستخدام الزراعي أو الحضري ". باستخدام هذا التعريف ، وجد التقييم العالمي للموارد الحرجية 2020 (FRA 2020) أن الغابات غطت 4.06 مليار هكتار (10.0 مليار فدان ؛ 40.6 مليون كيلومتر مربع ؛ 15.7 مليون ميل مربع) ، أو ما يقرب من 31 في المائة من مساحة اليابسة في العالم في عام 2020.'

]
]
if (document.readyState=='loading'){
    console.log('loding');
    document.addEventListener('DOMContentLoaded',s)
}
else{
    s()
}
function s(){
    var o = document.getElementsByClassName('pp')
    for(var i=0 ; i<o.length;i++){
        var l = o[i]
        l.addEventListener('click',chang)
    }
}
function chang(event){
    var ai = event.target
    document.querySelector('.a').classList.remove('a')
    ai.classList.add('a')
    if (document.querySelector('.a').innerText=='EN'){
        for(var i =1 ; i<=3;i++){
            document.querySelector('#p'+i).innerText=titels[0][i-1]
            document.querySelector('#o'+i).innerText=document.querySelector('#p'+i).innerText
            document.querySelector('#t'+i).innerText=text[0][i-1]
            document.querySelector('html').dir='ltl'
            document.querySelector('#h3').innerText='short cut :'
            document.querySelector('#go').innerText='go back'
            document.querySelector('h2').innerText='About'

        }
    

    }
    else {
        for(var i =1 ; i<=3;i++){
            document.querySelector('#p'+i).innerText=titels[1][i-01]
            document.querySelector('#o'+i).innerText=document.querySelector('#p'+i).innerText
            document.querySelector('html').dir='rtl'
            document.querySelector('#h3').innerText='اختصار :'
            document.querySelector('#go').innerText='عودة'
            document.querySelector('h2').innerText='موضوع'

            document.querySelector('#t'+i).innerText=text[1][i-1]
        }
    }

}