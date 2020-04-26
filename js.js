var p = document.createElement('p');

document.body.insertBefore(p,document.querySelector('.one'));
p.innerHTML = 'iosaoidko';
p.classList.add('two');
let mass = document.querySelectorAll('div');
mass.forEach(element => {
    element.style.color = 'orange';
});
mass[1].style.background = 'violet';
console.log(mass);
console.log(mass[1].style);

let a = {
    a1:'obja',
    a2:function(){
        console.log(this.a1);
    }
}
a.a2();

let b = {
    a1:'jjj',
    b1:'hhhhh'
}
Object.setPrototypeOf(b,a);
console.log(b);

b.a2();