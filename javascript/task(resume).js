var obj =
{
    first1:"",
    second1:"",
    dob1:"",
    age11:0,
    father1:"",
    mother1:"",
    address1:"",
    gender1:"",
    certifications1:"",
    ssc_year_of_passout :"",
    ssc_percent:"",
    ssc_place:"",
    inter_year_of_passout :"",
    inter_percent:"",
    inter_place:"",
    btech_year_of_passout :"",
    btech_percent:"",
    btech_place:"",
    skills1:"",
    hobbies1:"",
    profile1:"",
    badge1:"",
    description1:""
}
function first(event)
{
    obj.first1 = event.target.value;
}
function last(event)
{
    obj.second1 = event.target.value;
}
function dob(event)
{
    obj.dob1 = event.target.value;
}
function age(event)
{
    obj.age1 = event.target.value;
}
function father(event)
{
    obj.father1 = event.target.value;
}
function mother(event)
{
    obj.mother1 = event.target.value;
}
function address(event)
{
    obj.address1 = event.target.value;
}
function gender(event)
{
    obj.gender1 = event.target.value;
}
function certi(event)
{
    obj.certifications1 = event.target.value;
}
function ac1(event)
{
    obj.ssc_year_of_passout = event.target.value;
}
function ac2(event)
{
    obj.ssc_percent = event.target.value;
}
function ac3(event)
{
    obj.ssc_place = event.target.value;
}
function ac4(event)
{
    obj.inter_year_of_passout = event.target.value;
}
function ac5(event)
{
    obj.inter_percent = event.target.value;
}
function ac6(event)
{
    obj.inter_place = event.target.value;
}
function ac7(event)
{
    obj.btech_year_of_passout = event.target.value;
}
function ac8(event)
{
    obj.btech_percent = event.target.value;
}
function ac9(event)
{
    obj.btech_place = event.target.value;
}

function skills(event)
{
    obj.skills1 = event.target.value;
}
function hobbies(event)
{
    obj.hobbies1 = event.target.value;
}
function pic(event)
{
    obj.profile1 = event.target.value;
}
function badge(event)
{
    obj.badge1 = event.target.value;
}
function desc(event)
{
    obj.description1 = event.target.value;
}
function submit(event)
{
    console.log(obj);
}