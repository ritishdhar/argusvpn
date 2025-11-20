"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, CheckCircle2, XCircle, AlertTriangle, Eye, BarChart3, FileText } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface AnalysisResult {
  verdict: 'REAL' | 'FAKE' | 'UNCERTAIN';
  confidence: number;
  scores: {
    appearance: number;
    frequency: number;
    sync?: number;
    audio?: number;
  };
  metadata: {
    resolution: string;
    duration: string;
    fps: number;
    codec: string;
    audioPresent: boolean;
    compressionLevel: string;
    framesAnalyzed: number;
    audioSamplingRate?: number;
  };
  warnings: string[];
}

interface ResultsProps {
  result: AnalysisResult | null;
  onNewAnalysis: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, onNewAnalysis }) => {
  if (!result) return null;

  const getVerdictColor = () => {
    switch (result.verdict) {
      case 'REAL':
        return 'text-green-500 border-green-500/50 bg-green-500/10';
      case 'FAKE':
        return 'text-red-500 border-red-500/50 bg-red-500/10';
      case 'UNCERTAIN':
        return 'text-yellow-500 border-yellow-500/50 bg-yellow-500/10';
    }
  };

  const getVerdictIcon = () => {
    switch (result.verdict) {
      case 'REAL':
        return <CheckCircle2 className="w-8 h-8 text-green-500" />;
      case 'FAKE':
        return <XCircle className="w-8 h-8 text-red-500" />;
      case 'UNCERTAIN':
        return <AlertTriangle className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getVerdictMessage = () => {
    switch (result.verdict) {
      case 'REAL':
        return 'No significant manipulation signals found.';
      case 'FAKE':
        return 'Multiple indicators of manipulation detected.';
      case 'UNCERTAIN':
        return 'Video quality or audio limitations reduced accuracy.';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'bg-green-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const ScoreBar = ({ label, score }: { label: string; score: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <span className="text-sm font-bold">{score}%</span>
      </div>
      <div className="relative">
        <Progress value={score} className="h-2" />
        <div 
          className={`absolute top-0 left-0 h-2 rounded-full ${getScoreColor(score)}`} 
          style={{ width: `${score}%` }} 
        />
      </div>
    </div>
  );

  return (
    <section id="results" className="bg-background section-reveal py-24 md:py-32 mt-24 md:mt-32" style={{ animation: 'fadeIn 1s ease-in-out forwards' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
            Detection Results
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Verdict Card */}
          <Card className={`border-2 rounded-xl ${getVerdictColor()}`}>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {getVerdictIcon()}
              </div>
              <CardTitle className="text-4xl md:text-5xl font-bold mb-2">
                {result.verdict}
              </CardTitle>
              <p className="text-2xl font-semibold mb-2">
                Confidence: {result.confidence}%
              </p>
              <p className="text-muted-foreground">
                {getVerdictMessage()}
              </p>
            </CardHeader>
          </Card>

          {/* Model Breakdown */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-6">Model Breakdown</CardTitle>
              <CardContent className="p-0">
                <ScoreBar label="Appearance Score (CLIP)" score={result.scores.appearance} />
                <ScoreBar label="Frequency Score (DCT Artifacts)" score={result.scores.frequency} />
                {result.scores.sync !== undefined && (
                  <ScoreBar label="Audio-Visual Sync Score (SyncNet)" score={result.scores.sync} />
                )}
                {result.scores.audio !== undefined && (
                  <ScoreBar label="Audio Authenticity Score" score={result.scores.audio} />
                )}
              </CardContent>
            </CardHeader>
          </Card>

          {/* Explanation Section */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-4">Why This Verdict?</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-4">
                  Truthlens AI evaluated your content using four specialized models.
                  Here are the key signals that influenced the final decision:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li><strong>CLIP:</strong> Semantic inconsistencies in facial textures / movements</li>
                  <li><strong>DCT:</strong> High-frequency artifacts typical of GAN-generated faces</li>
                  {result.scores.sync !== undefined && (
                    <li><strong>SyncNet:</strong> Lip-sync deviations between speech and mouth movement</li>
                  )}
                  {result.scores.audio !== undefined && (
                    <li><strong>Audio Detector:</strong> Signs of synthetic speech patterns</li>
                  )}
                </ul>
                {result.verdict === 'REAL' && (
                  <p className="text-muted-foreground mt-4">
                    No significant artifacts were detected in semantic features, frequency patterns, or lip-sync alignment.
                  </p>
                )}
              </CardContent>
            </CardHeader>
          </Card>

          {/* Evidence & Visual Explanations */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6" />
                Evidence & Visual Explanations
              </CardTitle>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-video bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <span className="text-xs text-muted-foreground">Heatmap {i}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Click any frame to view detailed analysis
                </p>
              </CardContent>
            </CardHeader>
          </Card>

          {/* Frame Timeline */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-4">Frame-by-Frame Timeline</CardTitle>
              <CardContent className="p-0">
                <div className="flex gap-2 overflow-x-auto pb-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <div
                      key={i}
                      className={`flex-shrink-0 w-24 h-16 rounded bg-muted flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity ${
                        i % 3 === 0 ? 'border-2 border-red-500' : ''
                      }`}
                    >
                      <span className="text-xs text-muted-foreground">Frame {i}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Red borders indicate high anomaly frames
                </p>
              </CardContent>
            </CardHeader>
          </Card>

          {/* Metadata */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Video Metadata & Analysis Integrity
              </CardTitle>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Resolution</p>
                    <p className="font-medium">{result.metadata.resolution}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{result.metadata.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">FPS</p>
                    <p className="font-medium">{result.metadata.fps}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Codec</p>
                    <p className="font-medium">{result.metadata.codec}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Audio Present</p>
                    <p className="font-medium">{result.metadata.audioPresent ? 'Yes' : 'No'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Compression Level</p>
                    <p className="font-medium">{result.metadata.compressionLevel}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Frames Analyzed</p>
                    <p className="font-medium">{result.metadata.framesAnalyzed}</p>
                  </div>
                  {result.metadata.audioSamplingRate && (
                    <div>
                      <p className="text-sm text-muted-foreground">Audio Sampling Rate</p>
                      <p className="font-medium">{result.metadata.audioSamplingRate} Hz</p>
                    </div>
                  )}
                </div>
                {result.warnings.length > 0 && (
                  <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/50 rounded-lg">
                    <p className="text-sm font-medium text-yellow-600 mb-2">Warnings:</p>
                    <ul className="space-y-1">
                      {result.warnings.map((warning, i) => (
                        <li key={i} className="text-sm text-yellow-600">• {warning}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </CardHeader>
          </Card>

          {/* Export Report */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Download className="w-6 h-6" />
                Export Full Report
              </CardTitle>
              <CardContent className="p-0">
                <Button
                  onClick={() => {
                    // PDF download functionality would go here
                    alert('PDF report download would be implemented here');
                  }}
                  className="rounded-full"
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF Report
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Includes verdict, confidence, all scores, evidence images, metadata, and time of analysis
                </p>
              </CardContent>
            </CardHeader>
          </Card>

          {/* New Analysis Button */}
          <div className="text-center">
            <Button
              onClick={onNewAnalysis}
              variant="outline"
              className="rounded-full"
              size="lg"
            >
              Analyze Another File
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;

