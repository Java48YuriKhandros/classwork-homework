let group = {
    title: 'Java 48',
    students: ['Daria', 'Basya'],
    showList: function(){
        const title = this.title;
        const show = function(name){
            console.log(`${title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

//Unmodifyed
group.showList();
const newGroup = group;
group = null;
console.log('===================');
newGroup.showList();