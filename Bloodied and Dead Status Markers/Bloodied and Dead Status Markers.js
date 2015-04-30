on("change:graphic", function(obj) {
    if(obj.get("bar1_max") === "") return;
    obj.set({ status_redmarker: obj.get("bar1_value") <= obj.get("bar1_max") / 2 });
    obj.set({status_dead: obj.get("bar1_value") <= 0 });
});
