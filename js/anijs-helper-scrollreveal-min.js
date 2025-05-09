! function() {
    var a = AniJS.getHelper();
    a.scrollReveal = function(a, c) {
        animationContextBehaviorTargetList = c.behaviorTargetList, visibleBehaviorTargetList = [];
        for (var d = 0; d < animationContextBehaviorTargetList.length; d++) element = animationContextBehaviorTargetList[d], b.isElementInViewport(element, .33) ? element.isRevealed || (visibleBehaviorTargetList.push(element), element.isRevealed = 1) : element.isRevealed = 0;
        c.behaviorTargetList = visibleBehaviorTargetList, c.run()
    };
    var b = {
        viewportFactor: 1,
        docElem: window.document.documentElement,
        isElementInViewport: function(a, b) {
            var c = window.pageYOffset,
                d = c + this._getViewportH(),
                e = a.offsetHeight,
                f = this._getOffset(a).top,
                g = f + e,
                b = b || 0;
            return d >= f + e * b && g >= c || "fixed" == (a.currentStyle ? a.currentStyle : window.getComputedStyle(a, null)).position
        },
        _getViewportH: function() {
            var a = this.docElem.clientHeight,
                b = window.innerHeight;
            return b > a ? b : a
        },
        _getOffset: function(a) {
            var b = 0,
                c = 0;
            do isNaN(a.offsetTop) || (b += a.offsetTop), isNaN(a.offsetLeft) || (c += a.offsetLeft); while (a = a.offsetParent);
            return {
                top: b,
                left: c
            }
        }
    }
}(window);