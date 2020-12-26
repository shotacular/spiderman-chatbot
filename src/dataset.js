const defaultDataset = {
    "init": {
        "answers": [
            {"content": "助けて！！", "nextId": "help"},
            {"content": "おもしろいことないかな", "nextId": "consultant"},
            {"content": "アベンジャーズに参加したい", "nextId": "community"},
            {"content": "友達になりたい", "nextId": "friend"}
        ],
        "question": "親愛なる隣人、スパイダーマンだ🕷！用件はなんだい？"
    },
    "help": {
        "answers": [
            {"content": "追われてる", "nextId": "help_escape"},
            {"content": "閉じ込められた", "nextId": "help_locked"},
            {"content": "やられた...", "nextId": "help_damaged"},
            {"content": "暇すぎる", "nextId": "help_bored"}
        ],
        "question": "どうしたんだい？"
    },
    "help_escape": {
        "answers": [
            {"content": "場所を教える", "nextId": "contact"},
            {"content": "用件に戻る", "nextId": "init"}
        ],
        "question": "すぐに行くよ！場所を教えて！！"
    },
    "help_locked": {
        "answers": [
            {"content": "場所を教える", "nextId": "contact"},
            {"content": "用件に戻る", "nextId": "init"}
        ],
        "question": "場所はわかるかい？何か手掛かりを求む！"
    },
    "help_damaged": {
        "answers": [
            {"content": "場所を教える", "nextId": "contact"},
            {"content": "用件に戻る", "nextId": "init"}
        ],
        "question": "しっかりしてくれ！！今すぐ向かうよ！！"
    },
    "help_bored": {
        "answers": [
            {"content": "YouTubeで動画を見る", "nextId": "https://www.youtube.com/watch?v=NPY5Iq-tCvk"},
            {"content": "用件に戻る", "nextId": "init"}
        ],
        "question": "そんな時はこれでもどう？"
    },
    "consultant": {
        "answers": [
            {"content": "YouTubeで動画を見る", "nextId": "https://www.youtube.com/watch?v=NPY5Iq-tCvk"},
            {"content": "Marvelについて知りたい！", "nextId": "community"},
            {"content": "用件に戻る", "nextId": "init"}
        ],
        "question": "ゆっくりマイペースでいこうよ🕷"
    },
    "community": {
        "answers": [
            {"content": "どんな活動をしているの？", "nextId": "community_activity"},
            {"content": "スパイダーマンのことをもっと知りたい！", "nextId": "https://marvel.disney.co.jp/character/spiderman.html"},
            {"content": "用件に戻る", "nextId": "init"}
        ],
        "question": "いいね！！一緒に世界を救おうぜ～！！"
    },
    "community_activity": {
        "answers": [
            {"content": "もっと詳細を知りたい", "nextId": "https://marvel.disney.co.jp/"},
            {"content": "一緒にヒーローになる！！", "nextId": "contact"},
            {"content": "用件に戻る", "nextId": "init"}
        ],
        "question": "どんなことでも困ってる人がいたら助けるよ！"
    },
    "friend": {
        "answers": [
            {"content": "メッセージする", "nextId": "https://spidermannews.com/contact/"},
            {"content": "用件に戻る", "nextId": "init"}
        ],
        "question": "テンション上がるね～！！連絡待ってるよ！！"
    }
}

export default defaultDataset