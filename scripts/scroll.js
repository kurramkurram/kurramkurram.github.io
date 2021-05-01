class ScrollObserver {
    constructor(element) {
        this._init(element);
    }

    _init(element) {
        let targets = document.querySelectorAll(element);
        let offset = 100;

        window.addEventListener('scroll', function() {
            var scroll = window.scrollY;
            var height = window.innerHeight;
        
            for(let target of targets) {
                var pos = target.getBoundingClientRect().top + scroll;
                console.log(scroll, pos, height);
                if (scroll > pos - height + offset) {
                    target.classList.add("inview");
                }
            }
        });
    }
}