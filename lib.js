const _ = {
    map: function(arr, cb) {
        const c = [];
        for(let i=0; i<arr.length; i++) {
            c.push(cb(arr[i]));
        }
        return c;
    },
    reduce: function(arr, cb, m=0) { 
        let res = 0;
        for(let i=0; i<arr.length; i++) {
            res += cb(m, arr[i]);
        }
        return res;
    },
    find: function() {   
      // code here;
    },
    filter: function() { 
      // code here;
    },
    reject: function() { 
      // code here;
    }
}

// const the_array = [3,5,1,2,4];
// console.log(the_array);
// console.log(_.map(the_array, ele => ele ** 0.5));
// console.log(_.reduce(the_array, (memo, ele) => memo + ele));

class θ {
    constructor(id){
        this.element = null;
        if(id.startsWith("#")){
            this.element = document.getElementById(id.slice(1));
        } else {
            throw new Error("You're doing it wrong!");
        }
        // console.log(this.element);
    }


    click(cb){
        this.element.addEventListener("click", cb);
    }

    hover(cb1, cb2){
        this.element.addEventListener("mouseover", cb1);
        this.element.addEventListener("mouseleave", cb2);
    }

    addClass(className){
        this.element.classList.add(className);
    }

    removeClass(className){
        this.element.classList.remove(className);
    }

}

