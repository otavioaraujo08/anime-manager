export const titleGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    const randomText = [
        'Olá Chefe !',
        'Helou mai friendo !',
        'Eae, meu consagrado !',
        'Ola, meu bom !',
        'Ola, meu considerado !',
    ];

    return randomText[randomNumber];
};
