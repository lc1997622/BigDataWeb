function categoryLink(category) {
    if (category.Name == '评分前十电影') {
        return {
            name: 'channel1',
            params: {
                category: category.Name,
            },
        };
    } else if (category.Name == '票房前十电影') {
        return {
            name: 'channel2',
            params: {
                category: category.Name,
            },
        };
    }
        else if (category.Name == '首页') {
            return {
                name: 'channel3',
                params: {
                    category: category.Name,
                },
            };
    } 
    else if (category.Name == '投票前十计数') {
        return {
            name: 'channel4',
            params: {
                category: category.Name,
            },
        };
} 
else if (category.Name == '电影种类') {
    return {
        name: 'channel5',
        params: {
            category: category.Name,
        },
    };
} 
else if (category.Name == '评分段统计') {
    return {
        name: 'channel6',
        params: {
            category: category.Name,
        },
    };
}
else if (category.Name == '历年发行电影趋势') {
    return {
        name: 'channel7',
        params: {
            category: category.Name,
        },
    };
}
else if (category.Name == '电影语言统计') {
    return {
        name: 'channel8',
        params: {
            category: category.Name,
        },
    };
}
else if (category.Name == '历年总票房') {
    return {
        name: 'channel9',
        params: {
            category: category.Name,
        },
    };
}
else if (category.Name == '热度与票房的关系') {
    return {
        name: 'channel10',
        params: {
            category: category.Name,
        },
    };
}
else if (category.Name == '未来十年票房预测') {
    return {
        name: 'channel11',
        params: {
            category: category.Name,
        },
    };
}
else if (category.Name == '将上映电影票房预测') {
    return {
        name: 'channel12',
        params: {
            category: category.Name,
        },
    };
}
else if (category.Name == '投票数量与票房的关系') {
    return {
        name: 'channel13',
        params: {
            category: category.Name,
        },
    };
}
else if (category.Name == '词云图') {
    return {
        name: 'channel14',
        params: {
            category: category.Name,
        },
    };
}
else if (category.Name == '电影投票预计') {
    return {
        name: 'channel15',
        params: {
            category: category.Name,
        },
    };
}
else if (category.Name == '电影预算与收入') {
    return {
        name: 'channel16',
        params: {
            category: category.Name,
        },
    };
}
}

export{categoryLink};