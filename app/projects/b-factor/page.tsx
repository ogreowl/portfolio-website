'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Highlight, themes } from 'prism-react-renderer'
import Image from 'next/image'

export default function BFactorProject() {
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
              href="/projects" 
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Projects
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
              Using Deep Learning to Predict Protein B-Factors
            </h1>
          </div>

          {/* Project Overview */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              In this project, I had the opportunity to configure, modify, test, and train numerous machine learning & 
              deep learning models for the purpose of solving an ongoing problem in bioinformatics: determining the 
              positional variance of amino acids given its sequence. Our final model utilized the transformer architecture 
              & pre-trained embeddings to achieve a Pearson Correlation Coefficient of 0.78, matching state-of-the-art 
              approaches.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Background</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Google's AlphaFold has been the most impactful advancement in bioinformatics in recent years. Using a 
              complex ensemble of models, it is now able to take a sequence of amino acids to predict the structure 
              of a protein with an incredibly high accuracy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              When used, their model generates a static representation of the protein, with each amino acid placed in 
              its 'mean' position. However, each portion actually varies from this position over time:
            </p>
            <div className="my-8 flex justify-center">
              <Image
                src="/images/b.gif"
                alt="AlphaFold Prediction"
                width={500}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              One measure of its variance is 'B-Factor', which can be obtained from X-ray Crystallography. Low B-Factors 
              indicate well-ordered & stable structures, while high B-Factors indicate mobile & disordered structures.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The goal is, much like with AlphaFold, to be able to create a model with existing experimental data to 
              predict these metrics with a deep learning model. These computational tools have become essential to aiding 
              drug design and protein engineering, as well as to get a better understanding of mechanisms within cellular 
              biology.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Technical Implementation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While less experiential data is available on this metric, we were able to find many accurate measures of 
              protein B-Factor from the Protein Data Bank (PBD). Using similar filtering mechanism as a recent research 
              paper, our final training dataset used 60,000 protein sequences—all of which have a variety of functions 
              and biological origins.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              My role for this project involved systemically testing a range of architecture choices on a subset of our 
              data in order to inform our decisions in developing our final model. In total, I tested over 40 variations, 
              including:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Linear models (linear regression, ridge regression, lasso regression)</li>
              <li>Recurrent Neural Networks & LSTMs (number of layers, optimizers)</li>
              <li>Transformers (head size, learning rate)</li>
              <li>Variants of B-Factor Metrics</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              The transformer model performed best in my original testing—though our results were quite weak:
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/images/b1.png"
                alt="Initial model testing results"
                width={500}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              I modified the structure to utilize ProBERT embeddings—a pre-trained BERT model which gave high-dimensional 
              embedding representations to the amino acids. This massively improved the accuracy of all models:
            </p>

            <div className="my-8">
              <Image
                src="/images/b2.png"
                alt="Improvement with ProBERT embeddings"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our full-scaled model used this design choice, achieving a Pearson Correlation Coefficient of 0.78 after training on 60,000 protein sequences:
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/images/b6.png"
                alt="Final model results"
                width={500}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              We also trained a full-scale LSTM model, confirming our hypothesis that the transformer architecture would 
              outperform the LSTM architecture (which was the state-of-the-art at the time):
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/images/b7.png"
                alt="LSTM vs Transformer comparison"
                width={500}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              We found that our final model's accuracy varied immensely based on the protein it was predicting. For some 
              proteins, it made nearly perfect predictions, while it made very inaccurate predictions on others. This 
              indicates that, while our model has the potential to make precise predictions, its overall accuracy is 
              diminished by outliers:
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/images/b8.png"
                alt="Outlier comparison"
                width={575}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="my-8 flex justify-center">
              <Image
                src="/images/good-prediction.png"
                alt="Outlier comparison"
                width={575}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="my-8 flex justify-center">
              <Image
                src="/images/b9.png"
                alt="Outlier comparison"
                width={575}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
