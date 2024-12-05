const _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('Submit', function (event) { });
{
    Event.PreventDefault();
    const nameelement = document.getElementById('name');
    const emailelement = document.getElementById('email');
    const phoneelement = document.getElementById('phone');
    const educationelement = document.getElementById('education');
    const experiancelement = document.getElementById('experiance');
    const skillselement = document.getElementById('skills');
    if (nameelement && emailelement && phoneelement && educationelement && experiancelement && skillselement)
        const name_1 = nameelement.value;
    const email = emailelement.value;
    const phone = phoneelement.value;
    const education = educationelement.value;
    const experiance = experiancelement.value;
    const skills = skillselement.value;
    const resumeoutput;
    resume < /h2>
        < p > Name;
    /> $(name) </p >
        email;
    /> $(email) </p >
        phone;
    /> $(phone) </p >
        education < /h3>
        < p > $;
    {
        education;
    }
    /P>
        < p > $;
    {
        experiance;
    }
    /P>
        < p > $;
    {
        skills;
    }
    /P>;
    var resumeoutputelement = document.getElementById('resumeoutput');
    if (resumeoutputelement) {
        resumeoutputelement.innerHTML = resumeoutput;
    }
    else {
        console.error('the resumeoutputelements are missings');
    }
}
{
    console.error('one or more output element are missing');
    {
    }
}