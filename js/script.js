//  IPO - Input Process Output

//  Constants and Variables (State)
let skills;

//  Cached Element References 
const $button = $('button');
const $ul = $('ul');
const $input = $('input');

//  Event Listeners
$button.on('click', handleAddSkill);

//  Functions


init ();

function init() { 
    skills = [];
    render();
}

function handleAddSkill() {
    // Store the value from the input tag inside a local variable
    const skill = $input.val();
    // Check to make sure we have skill data
    if(skill) {
         // Create the UI for a skill
    const $skill =$(`<li><span>X</span> ${skill}</li>` )
         // Push the skill UI into the skills list
    $skill.on('click', function(){
        console.log($(this))
        $(this).remove();
    })

    skills.push($skill);
        //  clear the input tag's value
    $input.val('');
       // Call Render() 
    render()
    } else return;
}

function handleDelete(event) {
    // console.log(event);
// $(this).remove();
$(this).closest('li').remove()

}
function render() { 
//  Take the list of skills in the skills array and add them to the UL tags.
if(!skills.length) $ul.css('margin-bottom','30px');
else $ul.css('margin-bottom','0px');

$ul.html(skills);
}

 