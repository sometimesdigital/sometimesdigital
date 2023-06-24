---
title: Colorblind Friendly Palette
date: 2021-12-17
---

From: [Points of view: Color blindness](https://www.nature.com/articles/nmeth.1618)

<div id="palette"></div>

<script>
    const colors = ["#000000", "#e69f00", "#56b4e9", "#009e73", "#f0e442", "#0072b2", "#d55e00", "#cc79a7"];

    const palette = document.querySelector('#palette');

    colors.forEach(color => {
        const wrapper = document.createElement('div');
        wrapper.className = 'color';

        const picker = document.createElement('input');
        picker.name = color;
        picker.value = color;
        picker.type = 'color';

        const label = document.createElement('label');
        label.htmlFor = color;
        label.innerText = color;

        wrapper.appendChild(picker);
        wrapper.appendChild(label);
        palette.appendChild(wrapper);
    })
</script>

<style>
    #palette {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .color {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input[type="color"] {
        border: 0;
        background: none;
        box-shadow: none;
        padding: 0px;
        height: 50px;
        width: 50px;
        border-radius: 10cm;
        margin-top: 10px;
    }

    input[type="color"]:focus {
        background: none !important;
    }
</style>