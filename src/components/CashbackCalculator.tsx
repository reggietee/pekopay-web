"use client";

import { useState, useCallback } from "react";

const PRESETS = [
  { label: "$250K", value: 250000 },
  { label: "$1.2M", value: 1200000 },
  { label: "$5M", value: 5000000 },
  { label: "$25M", value: 25000000 },
];

function rateFor(volume: number): number {
  if (volume < 100000) return 0.005;
  if (volume < 500000) return 0.006;
  if (volume < 2500000) return 0.008;
  if (volume < 10000000) return 0.0095;
  return 0.011;
}

function fmt(n: number): string {
  return Math.round(n).toLocaleString("en-US");
}

function parseVal(s: string): number {
  const n = parseInt(String(s).replace(/[^0-9]/g, ""), 10);
  return isNaN(n) ? 0 : n;
}

export default function CashbackCalculator() {
  const [volume, setVolume] = useState(1200000);

  const rate = rateFor(volume);
  const cashback = volume * rate;

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = Math.min(50000000, Math.max(0, parseVal(e.target.value)));
      setVolume(v);
    },
    []
  );

  const handleSliderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVolume(parseInt(e.target.value, 10));
    },
    []
  );

  return (
    <div className="calc-card">
      <div className="calc-head">
        <div className="calc-title">
          Unlimited <span className="italic">cashback</span> potential
        </div>
        <div className="calc-rate">
          <span className="dot" />
          Current effective rate:{" "}
          <span className="calc-rate-value">
            {(rate * 100).toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="calc-body">
        <div className="calc-input-block">
          <label htmlFor="processing-volume">
            How much does your business process per year?
          </label>
          <div className="calc-input-wrap">
            <span className="prefix">$</span>
            <input
              id="processing-volume"
              type="text"
              inputMode="numeric"
              value={fmt(volume)}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>

          <div className="calc-presets" role="group" aria-label="Volume presets">
            {PRESETS.map((p) => (
              <button
                key={p.value}
                className={`calc-preset${volume === p.value ? " active" : ""}`}
                onClick={() => setVolume(p.value)}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="calc-slider">
            <input
              id="volume-slider"
              type="range"
              min={10000}
              max={50000000}
              step={10000}
              value={volume}
              onChange={handleSliderChange}
              aria-label="Processing volume"
            />
            <div className="calc-slider-labels">
              <span>$10K</span>
              <span>$50M</span>
            </div>
          </div>
        </div>

        <div className="calc-output">
          <div className="calc-output-label">Cashback</div>
          <div className="calc-output-value">
            <span className="currency">$</span>
            {fmt(cashback)}
          </div>
          <div className="calc-output-sub">
            Estimated annual cashback earned with PekoPay
          </div>
          <div className="calc-output-breakdown">
            <div>
              <div className="lbl">Per month</div>
              <div className="val">${fmt(cashback / 12)}</div>
            </div>
            <div>
              <div className="lbl">Per day</div>
              <div className="val">${fmt(cashback / 365)}</div>
            </div>
          </div>
        </div>
      </div>

      <p className="disclaimer">
        <strong>The cashback estimates provided by the PekoPay Cashback
        Calculator are based on average credit card processing rates and are for
        informational purposes only.</strong> Actual cashback earned may vary
        depending on the type of credit card used by your customers, their
        issuing bank, and other transaction-related factors. PekoPay does not
        guarantee specific cashback amounts, as rates and fees may fluctuate
        based on card type (e.g., standard, premium, business), transaction
        volume, and industry category. For a more accurate cashback estimate,
        please contact our team.
      </p>
    </div>
  );
}
