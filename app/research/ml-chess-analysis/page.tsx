'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Highlight, themes } from 'prism-react-renderer'
import Image from 'next/image'

export default function MLChessAnalysis() {
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Bobby Becker
              </Link>
              <Link 
                href="/research" 
                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Research
              </Link>
            </div>
          </div>
        </nav>
  
        {/* Main Content */}
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Machine Learning & Data Analysis of Online Chess Games
              </h1>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              I analyzed over 40,000 online chess games to explore relationships between player ratings, outcomes, openings, and other variables. After conducting a detailed statistical and visual analysis using Python, Pandas, Matplotlib, and Seaborn, I designed a customized K-Nearest Neighbors (KNN) model to predict a player’s rating based on their opening move, game outcome, and opponent skill level — achieving a median error rate within 1.5% of a player’s true ranking.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              In addition, I built a Generative Pretrained Transformer to play chess by continually predicting the next move
              within a sequence. I tested its performance against StockFish, the most powerful Chess Engine, in order to 
              illustrate the potential, limitations, and modern approaches of applying attention-based AI architectures 
              to domains currently dominated by traditional deep learning systems.
            </p>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Data Analysis & Predictive Model Implementation</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                I collected two publicly available datasets: one of online Chess games, and another of famous games played by Grandmasters.
                In addition, I created a synthetic dataset of Chess games played by Stockfish, the most powerful Chess Engine. These were loaded
                into a Jupyter Notebook via the Pandas library. 
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                With Matplotlib and Seaborn, I created visualizations to better understand the relationships between variables in the datasets and the between the datasets themselves. Here are a few notable examples:
              </p>

              <p className="text-gray-700 leading-relaxed italic mb-6">Player Rating Distribution:</p>
              <div className="my-8 flex justify-center">
                <Image
                  src="/images/ratings.png"
                  width={750}
                  height={380}
                  alt="Player Ratings"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-6">Relationship between color, player ratings, and game outcomes:</p>
              <div className="my-8 flex justify-center">
                <Image
                  src="/images/game-outcomes.png"
                  width={750}
                  height={380}
                  alt="Game Outcomes"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-6">Relationship between time control and number of moves:</p>
              <div className="my-8 flex justify-center">
                <Image
                  src="/images/time-controls.png"
                  width={750}
                  height={380}
                  alt="Player Ratings"
                  className="rounded-lg shadow-lg"
                />
              </div>
              
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Based on these findings, I designed a K-Nearest Neighbors (KNN) model to predict chess players' rankings 
              using three key features: opponent skill level, game outcome, and opening move. The model employs a 
              two-step filtering process to make its predictions:
            </p>

            <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
              <li>First, it narrows down the potential neighbors by only considering games that match both the opening 
                move and game outcome of the target game.</li>
              <li>Then, from this filtered set, it selects the five most similar games based on opponent ranking similarity.</li>
            </ol>

            <p className="text-gray-700 leading-relaxed mb-6">
              To illustrate: Consider predicting a player's ranking in a game where White won with an opening move of d4, 
              facing an opponent rated 1500. The model would:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Filter the dataset to only include games where White won with a d4 opening</li>
              <li>From these games, identify the five where the opponent's rating was closest to 1500</li>
              <li>Calculate a weighted average of these five players' ratings, (greater weight given to closer similarities)</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              To evaluate the model's performance, I split the data into training and testing sets. The model makes 
              predictions for games in the testing set using only information from the training set. When compared 
              against a baseline model (which predicted rankings based solely on opponent rating), the results were 
              promising:
            </p>
            <div className="my-8 flex justify-center">
              <Image
                src="/images/knn-model.png"
                width={500}
                height={200}
                alt="KNN Results"
                className="rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Based on these metrics, the KNN appears to make extremely precise predictions over half of the time. The 
              main way it does this is through the relationship between the game outcome and the opponent's ranking: if 
              White wins, beating an opponent that is ranked 1500, then they are likely to be ranked higher than 1500.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The first move played gives additional context: if the first move played is d4, that could directly 
              indicate a slightly higher ranking for white, as d4 is, on average, preferred by higher-ranked players. 
              More subtly, there could be relations between the variables that give the first move more predictive power: 
              if white wins and their first move is d4, that could indicate a slightly different estimated ranking than 
              games where white wins and their first move is e4.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Training a Generative Pretrained Transformer to play Chess</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To build a transformer-based chess engine, I first created a custom tokenizer to encode chess moves. These moves are included
              in a consistent format (in chess notation) for each game, which allows us to configure a pytorch script to preprocess our data:
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 max-w-2xl">
              <Highlight
                theme={themes.github}
                code={`
# load the dataset & collect unique moves
data = pd.read_csv("chess_games.txt", header=None, names=["text"])
all_moves = set()
for game in data["text"]:
    moves = game.split()  # Split each game by whitespace to derive moves
    all_moves.update(moves)

# add [UNK] to the vocabulary for unknown tokens
vocab = {move: idx for idx, move in enumerate(all_moves)}
vocab["[UNK]"] = len(vocab)  # Add [UNK] token

# initalize and save tokenizer
tokenizer = Tokenizer(WordLevel(vocab, unk_token="[UNK]"))
tokenizer.pre_tokenizer = Whitespace()
tokenizer.save("chess_tokenizer.json")
`.trim()}
                language="python"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} text-sm`} style={style}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span className="text-gray-500 mr-4 select-none text-xs">{i + 1}</span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              This allows us to interpret chess moves just as ChatGPT & other NLP algorithms interpret word tokens. In fact, with Word2Vec,
              we can visualize moves & games in 2D space:
            </p>
            <div className="my-8 flex justify-center">
                <Image
                    src="/images/chessumap.png"
                    width={650}
                    height={380}
                    alt="Word2Vec"
                    className="rounded-lg shadow-lg"
                />
            </div>
            <div className="my-8 flex justify-center">
                <Image
                    src="/images/chessumap2.png"
                    width={650}
                    height={380}
                    alt="Word2Vec"
                    className="rounded-lg shadow-lg"
                />
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              With the tokenizer, we were able to train a GPT-2 model on the datasets of Chess games. This was done by loading a pre-trained HuggingFace GPT-2 model and 
              training it with our chess data:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6 max-w-2xl">
              <Highlight
                theme={themes.github}
                code={`# data processing
tokenizer = GPT2TokenizerFast(tokenizer_file="chess_tokenizer.json")
tokenizer.pad_token = tokenizer.eos_token  # Set padding token
data = pd.read_csv("chess_games.txt", header=None, names=["text"])
dataset = Dataset.from_pandas(data)
dataset = dataset.train_test_split(test_size=0.1)

# GPT config
config = GPT2Config(
    vocab_size=tokenizer.vocab_size,
    n_positions=512,
    n_embd=512,
    n_layer=6,
    n_head=8,
)

model = GPT2LMHeadModel(config)
model.resize_token_embeddings(len(tokenizer))

# tokenize dataset function
def tokenize_function(examples):
    tokens = tokenizer(examples["text"], padding="max_length")
    tokens["labels"] = tokens["input_ids"].copy()
    return tokens

tokenized_datasets = dataset.map(tokenize_function, remove_columns=
["text"])

# training arguments:
training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    logging_strategy="steps",
    logging_steps=50,
    save_strategy="epoch",
    learning_rate=5e-4,
    weight_decay=0.01,
    per_device_train_batch_size=8,
    per_device_eval_batch_size=8,
    max_steps=5000,
    num_train_epochs=5,
    logging_dir='./logs',
    report_to="none",
)`}
                language="python"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} text-sm`} style={style}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span className="text-gray-500 mr-4 select-none text-xs">{i + 1}</span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              After training, we now had a model that could predict the next move given in a sequence. I created a loop for our home-grown model to play against StockFish: 
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6 max-w-2xl">
              <Highlight
                theme={themes.github}
                code={`# Initialize Stockfish
stockfish = Stockfish(
    path="/opt/homebrew/bin/stockfish",
    depth=18,
    parameters={
        "Threads": 2,
        "Minimum Thinking Time": 1000,
        "MultiPV": 3
    }
)

# Load GPT model
model_path = "fine_tuned_gpt2_chess"
model = GPT2LMHeadModel.from_pretrained(model_path)
tokenizer = GPT2TokenizerFast.from_pretrained(model_path)
model.eval()

# Initialize the game
board = chess.Board()
move_history = []

def get_gpt_move(current_position):
    formatted_moves = []
    for i, move in enumerate(move_history):
        if i % 2 == 0:
            formatted_moves.append(f"{(i//2)+1}. {move}")
        else:
            formatted_moves.append(move)
    
    prompt = " ".join(formatted_moves)
    
    print(f"Prompt sent to GPT: '{prompt}'")
    
    input_ids = tokenizer(prompt, return_tensors="pt").input_ids
    
    # generate next move
    output = model.generate(
        input_ids, 
        max_length=input_ids.shape[1] + 2,
        do_sample=True,
        num_return_sequences=1
    )
    generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
    
    print(f"Full GPT response: '{generated_text}'")  # Debug print
    
    # extract the last move from the generated sequence
    moves = generated_text.split()
    return moves[-1] if moves else None
                `}
                language="python"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} text-sm`} style={style}>
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        <span className="text-gray-500 mr-4 select-none text-xs">{i + 1}</span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our model was able to play coherently for most of the game—until getting into unknown positions, where it would try to play illegal moves. 
              This is a common issue with transformer-based models, and is a topic of active research. In the future, training a more powerful model exclusively on strong players, 
              and integrating Reinforcement Learning to encourage stronger moves, would likely improve performance massively. Traditional AI engines are 
              likely to remain dominant in terms of raw strength; but, these GPT-based engines could be used to create more 'human-like' AI engines—by curating
              the dataset, we can create functioning chess engines that behave like specific players, styles, or eras.
            </p>
            
            
          </div>
        </main>
      </div>
    )
  }
  