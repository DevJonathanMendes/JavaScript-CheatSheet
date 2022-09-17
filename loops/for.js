for (let i = 0; i < 10; i++) {
    if (i === 1)
        break;
    else
        return;
};

for (let i = 0; i < 10; i++)
    console.log(i);

let ex = 0;
for (ex; ex < 10; ex++);
// ex = 10;