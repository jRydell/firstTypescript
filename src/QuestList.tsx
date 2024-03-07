import { useState } from "react";


type Quest = {
    id: number;
    complete: boolean;
    description: string;
};


const QuestList = () => {
    const startQuests: Quest[] = [
        { id: 1, complete: false, description: "Slay the king" },
        {
            id: 2,
            complete: false,
            description: "Collect 10 pink flowers from the meadow",
        },
        { id: 3, complete: false, description: "Build a castle" },
        { id: 4, complete: false, description: "Research new spell" },
        {
            id: 5,
            complete: true,
            description: "Invite friends for tea & coffee",
        },
    ];


    const [quests, setQuests] = useState(startQuests);


    return (
        <>
            <h1>QuestList</h1>
            <ul>
                {quests.map((q: Quest) => {
                    return (
                        <li key={q.id}>
                            {q.complete ? (
                                <span
                                    onClick={() => {
                                        setQuests(
                                            quests.map((quest) => {
                                                if (quest.id === q.id)
                                                    return { ...q, complete: false };
                                                else return quest;
                                            })
                                        );
                                    }}
                                >
                                    ✅
                                </span>
                            ) : (
                                <span
                                    onClick={() => {
                                        setQuests(
                                            quests.map((quest) => {
                                                if (quest.id === q.id)
                                                    return { ...q, complete: true };
                                                else return quest;
                                            })
                                        );
                                    }}
                                >
                                    🟩
                                </span>
                            )}{" "}
                            {q.description}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};


export default QuestList;
